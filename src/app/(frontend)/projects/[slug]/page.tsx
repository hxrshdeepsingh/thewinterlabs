import Image from 'next/image'

interface Props {
  params: { slug: string }
}

export default function SinglePage({ params }: Props) {
  const { slug } = params

  return (
    <div className="max-w-custom mx-auto pt-[150px]">
      <h1 className="text-5xl font-semibold text-center">heheheehe</h1>
      <Image
        className="pt-20"
        width={1024}
        height={500}
        alt="iouei"
        src={'/api/media/file/07322ce0c7a126535604f85a52c38c30230712d2-1952x940.avif'}
      />
      <p className="pt-10 max-w-[700px] mx-auto">hehehehe</p>
    </div>
  )
}
