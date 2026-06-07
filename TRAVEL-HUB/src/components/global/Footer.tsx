const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-5 text-(--heading) font-semibold bg-(--text-light) text-center">
      &copy; All right reserved. TravelHub {year}.
    </footer>
  );
};

export default Footer;
