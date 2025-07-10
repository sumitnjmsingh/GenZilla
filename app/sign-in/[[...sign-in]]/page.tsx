import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
     <section className="relative flex justify-center items-center min-h-screen bg-[#0A0C2C] overflow-hidden">
      <div className="z-10">
        <SignIn forceRedirectUrl="/dashboard" />
      </div>
    </section>
  );
}