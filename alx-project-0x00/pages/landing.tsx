import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Landing Page</h1>

      <Card />
      <Card />

      <div className="mt-10 flex flex-col gap-4 text-base">

        {/* Small buttons */}
        <Button 
          title="Small Rounded-sm"
          styles="px-3 py-1 bg-blue-500 text-white rounded-sm"
        />
        <Button 
          title="Small Rounded-md"
          styles="px-3 py-1 bg-blue-500 text-white rounded-md"
        />
        <Button 
          title="Small Rounded-full"
          styles="px-3 py-1 bg-blue-500 text-white rounded-full"
        />

        {/* Medium buttons */}
        <Button 
          title="Medium Rounded-sm"
          styles="px-4 py-2 bg-green-500 text-white rounded-sm"
        />
        <Button 
          title="Medium Rounded-md"
          styles="px-4 py-2 bg-green-500 text-white rounded-md"
        />
        <Button 
          title="Medium Rounded-full"
          styles="px-4 py-2 bg-green-500 text-white rounded-full"
        />

        {/* Large buttons */}
        <Button 
          title="Large Rounded-sm"
          styles="px-6 py-3 bg-purple-500 text-white rounded-sm"
        />
        <Button 
          title="Large Rounded-md"
          styles="px-6 py-3 bg-purple-500 text-white rounded-md"
        />
        <Button 
          title="Large Rounded-full"
          styles="px-6 py-3 bg-purple-500 text-white rounded-full"
        />

      </div>

    </main>
  );
};

export default Landing;
