
const Header = (props) => (
    <div className="header">{props.course}
        <span>
            Hello, this is the header</span>
    </div>
)

// export 'Header' (imported as 'Header') was not found in
//  './components/Header.js' (possible exports: default)
// when you export function you need {}
// export function Header(header);
export default Header;
