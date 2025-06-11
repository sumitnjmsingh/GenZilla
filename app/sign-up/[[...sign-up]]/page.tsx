import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center lg:min-h-[40vh]">
      <SignUp forceRedirectUrl="/dashboard" />
    </section>
  );
}
