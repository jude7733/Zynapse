import { AnimationContainer } from "@/components/AnimationContainer";
import { EventCard } from "@/components/events-card";
import { individualEvents } from "@/lib/events";

export default function IndividualEvents() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 w-full">
      {individualEvents.map((event) => (
        <AnimationContainer mode="reveal" key={event.id} index={event.id}>
          <EventCard
            key={event.id}
            id={event.id.toString()}
            title={event.title}
            description={event.description}
            imageSrc={event.imageSrc}
            rules={event.rules}
          />
        </AnimationContainer>
      ))}
    </div>
  );
}
