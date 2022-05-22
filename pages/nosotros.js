import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'


const Nosotros = () => {
  return (
    <Layout
      pagina='Nosotros'
    >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>

          <div className={styles.contenido}>
            
                  <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="imagen sobre nosotros" />
                  
                  <div>
                    <p className={styles.tjustificado}>Morbi dui libero, consectetur in tellus id, eleifend egestas odio. Proin congue, nibh in pharetra fringilla, lectus turpis tristique magna, ultricies ullamcorper nulla lorem dignissim sapien. Nullam in ultricies nisl. Morbi tempus odio ex, id auctor massa dapibus non. Aliquam efficitur sem eget arcu accumsan maximus. Nulla dui quam, vulputate sit amet auctor ac, auctor eget dui. Vivamus dictum mi quis sodales tincidunt. Integer dui purus, mollis sed nulla interdum.</p>

                    <p className={styles.tjustificado}>Morbi dui libero, consectetur in tellus id, eleifend egestas odio. Proin congue, nibh in pharetra fringilla, lectus turpis tristique magna, ultricies ullamcorper nulla lorem dignissim sapien. Nullam in ultricies nisl. Morbi tempus odio ex, id auctor massa dapibus non. Aliquam efficitur sem eget arcu accumsan maximus. Nulla dui quam, vulputate sit amet auctor ac, auctor eget dui. Vivamus dictum mi quis sodales tincidunt. Integer dui purus, mollis sed nulla interdum, ullamcorper iaculis felis. Nulla eget risus suscipit, varius felis in, commodo dui. Fusce vitae sagittis quam. Cras aliquet, sapien vitae vulputate congue, lacus mauris posuere leo, in viverra ante nulla in justo.</p>
                  </div>
          </div>
        </main>
    </Layout>
  )
}

export default Nosotros