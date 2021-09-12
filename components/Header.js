import Link from "next/link";

const linkStyle = {
  marginRight: 15
}

const Header = () => {


  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>  
      </Link>
      <Link href="/about">
        <a style={linkStyle}>about</a>  
      </Link>
      <Link href="/about/100">
        <a>about_Dynamic_Page</a>
      </Link>
    </div>
  )
}

export default Header
// https://fakestoreapi.com/