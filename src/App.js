import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        {/* home */}
        <section id="Home">
          <article>
            <h1>Home </h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </article>
        </section>
        {/* about */}
        <section id="About">
          <article>
            <h1>About </h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </article>
        </section>
        {/* constact */}
        <section id="Contact">
          <article>
            <h1>Contact </h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </article>
        </section>
        {/* blog */}
        <section id="Blog">
          <article>
            <h1>Blog </h1>
            <p>How to deploy Static React Websit in Github</p> <br />

            <div className="create-react">
              <h4>[1] Create a react app first using:</h4>
              <p>npx create-react-app my-react</p> <br />
            </div>

            <div className="intall-libraries">
              <h4>[2] Install this npm libraries:</h4>
              <p>npm install gh-pages --save-dev</p><br />
            </div>

            <div className="git-command">
              <h4>[3] Apply this git commad:</h4>
              <ul>
                <li>git init</li>
                <li>git add .</li>
                <li>git status</li>
                <li>git commit -m "first commit"</li>
                <li>git branch -M main</li>
                <li>
                  git remote add origin https://github.com/github-username/github-repository-name.git
                </li>
                <li>git push -u origin main</li>
              </ul>
            </div>
            <br />

            <div className="intall-libraries">
              <h4>[4] And then run this npm libraries: </h4>
              <p>npm run deploy</p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
