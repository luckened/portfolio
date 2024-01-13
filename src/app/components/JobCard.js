import Image from "next/image";

const JobCard = ({ title, description, image, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="block">
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-purple-500">
      <span className="flex justify-between items-center">
        <Image src={image} width={60} height={60} alt={`${title}'s logo`} />

        <span className="mb-3 text-2xl font-semibold">
          {title}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </span>
      </span>
      <p className="py-2 text-sm opacity-50">{description}</p>
    </div>
  </a>
);

export default JobCard;
