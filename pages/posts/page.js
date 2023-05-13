import Format from '../../layout/format'
import Author from '../../components/_child/author'
import Image from 'next/image'
import Related from '../../components/_child/related'

const Page = () => {
  return(
    <Format>
        <section className="container mx-auto md:px-2 py-16 w-1/2">
            <div className='flex justify-center'>
                <Author></Author>
            </div>
            <div className='post py-10'>
                <h1 className='font-bold text-4xl text-center pb-5'>Mollit dolore consequat elit nostrud do nostrud cupidatat culpa ullamco sunt reprehenderit.</h1>
                <p className='text-grey-500 text-xl text-center'>Pariatur elit nulla incididunt veniam veniam voluptate excepteur laborum fugiat Lorem duis eu voluptate ipsum.</p>
                <div className='py-10'>
                    <Image src={"/images/1im.jpg"} width={900} height={600}></Image>
                </div>
                <div className='content text-gray-600 text-lg flex flex-col gap-4'>
                    <p>Qui dolor consectetur magna sunt exercitation id dolor aliqua labore laboris aliqua.</p>
                    <p>Qui dolor consectetur magna sunt exercitation id dolor aliqua labore laboris aliqua.</p>
                    <p>Qui dolor consectetur magna sunt exercitation id dolor aliqua labore laboris aliqua.</p>
                    <p>Qui dolor consectetur magna sunt exercitation id dolor aliqua labore laboris aliqua.</p>
                    <p>Qui dolor consectetur magna sunt exercitation id dolor aliqua labore laboris aliqua.</p>
                </div>
            </div>
            <Related></Related>
        </section>
    </Format>
  )
}

export default Page;