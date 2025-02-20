"use client";
import { useState } from "react";
import { getDetails, updateDetails } from "@/components/backend/firebase";
import { useRouter } from "next/navigation";
import { TeamDetails, UserDetails } from "@/components/context/userContext";
import { TeamMemberRegistration } from "@/components/team-member-registration";
import Link from "next/link";

export default function BGMIRegistration() {
  const { user, registrationDetails, setRegistrationDetails } = UserDetails();
  const dataFilled = registrationDetails?.fullName.length > 0;
  const router = useRouter();

  const [submitted, setSubmitted] = useState(false);
  const [teamData, setTeamData] = useState<TeamDetails[]>([
    {
      member: 2,
      fullName: "",
      email: "",
      phoneNo: "",
      collegeName: "",
      course: "",
      yearOfStudy: "",
    },

    {
      member: 3,
      fullName: "",
      email: "",
      phoneNo: "",
      collegeName: "",
      course: "",
      yearOfStudy: "",
    },
    {
      member: 4,
      fullName: "",
      email: "",
      phoneNo: "",
      collegeName: "",
      course: "",
      yearOfStudy: "",
    },
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    member: number,
  ) => {
    const { name, value } = e.target;
    setTeamData((prevData) =>
      prevData.map((data) =>
        data.member === member ? { ...data, [name]: value } : data,
      ),
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      console.error("User is not authenticated");
      return;
    }
    try {
      const newEvent = {
        bgmi: teamData,
      };
      console.log(newEvent);
      await updateDetails(user.email, newEvent)
        .then(async () => {
          const details = await getDetails(user.email!);
          setRegistrationDetails(details);
          setSubmitted(true);
          router.push("/competitions");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    } catch (error) {
      console.error("Error in handleSubmit: ", error);
    }
  };
  return (
    <div className="z-20 container mx-auto p-4 flex flex-col items-center justify-start w-full h-full">
      {!user ? (
        <h2 className="text-2xl md:text-6xl font-exo2 my-20">
          Please Sign in to register events
        </h2>
      ) : (
        <>
          <h1 className="text-2xl md:text-6xl font-monoton mb-14 z-20">BGMI</h1>
          {registrationDetails.techQuiz.length > 0 ? (
            <h2 className="text-2xl md:text-6xl font-exo2 my-20">
              Already Registered!
            </h2>
          ) : !dataFilled ? (
            <h2 className="text-2xl md:text-6xl font-exo2 my-20 z-20">
              Please fill in your details{" "}
              <Link href="/register" className="btn-link">
                here
              </Link>{" "}
              before registration
            </h2>
          ) : (
            <>
              <div className="divider divider-primary z-20">
                Team Registration
              </div>

              <div className="relative z-10 bg-opacity-75 backdrop-blur-md">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8 max-w-4xl p-4 md:p-8 lg:p-14 shadow-md shadow-primary rounded-lg bg-gradient-to-r from-fuchsia-700/10 to-purple-600/20"
                >
                  <div className="form-control mt-6">
                    <h2 className="text-xl">Team Leader</h2>
                    <span className="text-secondary-foreground">
                      {registrationDetails.fullName}
                    </span>
                  </div>
                  {teamData.map((memberData) => (
                    <TeamMemberRegistration
                      key={memberData.member}
                      member={memberData.member}
                      teamData={teamData}
                      handleChange={handleChange}
                    />
                  ))}
                  <div className="form-control mt-6">
                    <label className="label">
                      <span className="label-text">
                        Make sure all details are correct before submitting
                      </span>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
                {submitted && (
                  <div className="toast toast-end">
                    <div className="alert alert-success">
                      <span>Registered Successfully</span>
                    </div>
                    <div className="alert alert-info">
                      <span>Now you can register for events</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
