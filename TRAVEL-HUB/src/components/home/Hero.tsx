import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-15 py-20 gap-8 bg-linear-to-r from-(--indigo) to-(--purple)">
      <h1 className="text-[28px] text-(--white) font-semibold text-center">Find Your Perfect Getaway</h1>
      <SearchBar />
    </div>
  );
};

export default Hero;
