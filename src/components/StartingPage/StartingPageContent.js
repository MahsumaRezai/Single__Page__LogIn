import Footer from './Footer';
import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      <Footer/>
    </section>
  );
};

export default StartingPageContent;
