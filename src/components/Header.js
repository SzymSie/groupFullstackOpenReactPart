<<<<<<< Updated upstream

const Header = (props) => (
    <div className="header">{props.course.name}
        <span>
            Hello, this is the header</span>
    </div>
)
=======
export function Header(props) {
// const Header = (props) => {
  return <h1 className='header'>{props.course.name}</h1>;
};
>>>>>>> Stashed changes

export default Header;

// export 'Header' (imported as 'Header') was not found in
//  './components/Header.js' (possible exports: default)
// when you export function you need {}
// export function Header(header);

