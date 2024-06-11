import GenerateForm from "@/components/form";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen flex w-full flex-col items-center justify-center bg-dot-white/[0.2] relative ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
      <BackgroundGradient
        className="rounded-3xl max-w-sm sm:max-w-md bg-gray-950 p-4 sm:p-10"
        containerClassName="m-4"
      >
        <GenerateForm />
      </BackgroundGradient>
    </main>
  );
}
