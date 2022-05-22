import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'

const Blog = ({entradas}) => {
  
  return (
    <Layout
      pagina='blog'
    >
        <main className='contenedor'>
          <ListadoBlog
            entradas={entradas}
          />
        </main>
    </Layout>
  )
}

export async function getStaticProps() {
      const url = `${process.env.API_URL}/blogs`
      //console.log(url)

      const respuesta = await fetch(url)
      const entradas = await respuesta.json()

      //console.log(entradas)  //se muestra en la consola del servidor
  return {
    props: {
        entradas
    }
  }
}

export default Blog