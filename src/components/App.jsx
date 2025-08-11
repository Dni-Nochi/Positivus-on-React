import { Header } from './header';
import { Section } from './Section';
import { ShowCase } from './ShowCase';
import { Slider } from './Slider';
function App() {
  return (
    <>
      <Header />
      <Section />
      <div className="flex gap-4 mx-42">
        <Slider />
        <ShowCase />
      </div>
    </>
  );
}

export { App };
