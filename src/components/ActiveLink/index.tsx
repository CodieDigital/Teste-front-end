import { useRouter } from 'next/router'
 
function ActiveLink({ children, href }: {children: string, href: string}) {

  const router = useRouter()
 
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
  }
 
  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  )
  
}
 
export default ActiveLink