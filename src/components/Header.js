export function Header(props) {
// const Header = (props) => {
  return <h1 className='header'>{props.course.name}</h1>;
};

// export 'Header' (imported as 'Header') was not found in
//  './components/Header.js' (possible exports: default)
// when you export function you need {}
// export function Header(header);

