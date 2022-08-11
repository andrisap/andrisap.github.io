import ContainerBlock from '@components/ContainerBlock'
// import HomeComponent from '@components/Home';
import HomeComponent from '@components/Home'

export default function Home() {
  return (
    <ContainerBlock isFooter={true} title='Home' description='Unicam Studio Is branding consulting company and digital in the field of manufacturing services Software, Content Production, Design Graphics, and Social Media headquartered in Yogyakarta.'>
      <HomeComponent />
    </ContainerBlock>
  )
}
