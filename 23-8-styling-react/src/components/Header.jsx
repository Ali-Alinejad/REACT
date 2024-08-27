import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex flex-col items-center w-auto h-dvh mt-8 mb-16 '>
      <img src={logo} alt="A canvas" className='h-40 mt-[13%]' /> 
      <h1 className='font-light p-10 font-bold font cursor-pointer hover:text-red-600 border:2px solid border-slate-700'>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
