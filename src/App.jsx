import ProfileBadge from "./components/ProfileBadge";
import TopActionButton from "./components/TopActionButton";

function App() {
  return (
    <>
      <div className='w-full max-w-[375px] mx-auto relative'>
        <TopActionButton />
        <div className='avatar w-full'>
          <div className='img-container pt-[66%] min-h-[420px]'>
            <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
          </div>
        </div>
        <ProfileBadge />
      </div>
    </>
  );
}

export default App;
