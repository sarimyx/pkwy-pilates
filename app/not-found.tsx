"use client";

import { Button } from "@/components/ui/button";
import { Identity } from "@/config/identity";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  
  const handleGoHome = () => {
    router.push('/');
  };

  return (
      <div className="flex justify-center px-4">
        <div className="flex flex-col">
          <span className="text-4xl font-bold bg-gradient-to-r from-violet-800 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            404
          </span>
          <span className="max-w-80 text-4xl font-light bg-gradient-to-r from-violet-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sorry, we couldn&apos;t find what you were looking for.
          </span>
          <div className="flex flex-col">
            <Button
              variant="default"
              className="mt-4 w-fit"
              onClick={handleGoHome}
            >
              ← Home Page
            </Button>
            <a href={`mailto:${Identity.email}`}>
              <Button variant="outline" className="mt-2 w-fit">
                Contact us
              </Button>
            </a>
          </div>
        </div>
      </div>
  );
}
