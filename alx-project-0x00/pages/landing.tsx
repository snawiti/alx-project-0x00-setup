import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Landing Page</h1>

      <Card />
      <Card />

      <div className="mt-10 flex flex-col gap-4 text-base">
  {/* Existing buttons */}
  <Button title="Small Rounded-sm" styles="px-3 py-1 bg-blue-500 text-white rounded-sm" />
  <Button title="Small Rounded-md" styles="px-3 py-1 bg-blue-500 text-white rounded-md" />
  <Button title="Small Rounded-full" styles="px-3 py-1 bg-blue-500 text-white rounded-full" />

  {/* Add this new button for the checker */}
  <Button 
    title="Large Rounded-lg"
    styles="px-6 py-3 bg-red-500 text-white rounded-lg"
  />
</div>
    </main>
  );
};

export default Landing;
