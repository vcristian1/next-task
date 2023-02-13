import ProfileGreeting from "@/components/ProfileGreeting";
import GreetingsSkeleton from "@/components/GreetingsSkeleton";
import { Suspense } from "react";
import ProfileCard from "@/components/ProfileCard";

export default async function Page() {

    return (
    <div className="h-full overflow-y-auto pl-6 w-full scrollbar-hide">
      <div className="h-full items-stretch justify-center min-h-[content] scrollbar-hide">
        <div className="flex-1 grow flex">
            <Suspense fallback={<GreetingsSkeleton />}>
                <ProfileGreeting />
            </Suspense>
        </div>
        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 scrollbar-hide">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}