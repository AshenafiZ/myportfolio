export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="ml-20 max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">© {new Date().getFullYear()} Ashenafi Zewdie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
