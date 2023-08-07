async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}
const About = async () => {
  await takeTime();
  return <div>I am about</div>;
};

export default About;
