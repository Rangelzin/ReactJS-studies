type Props = {
  name: string;
  avatar?: string;
  roles: string[];
};

export const Person = ({ 
    name, 
    avatar = 'https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-black-default-avatar-image_2237212.jpg', 
    roles 
}: Props) => {
        return (
            <div className="inline-block p-4 m-4 border-2 border-gray-700 w-fit">
            <h1>{name}</h1>
            <img src={avatar} alt={name} className=" h-40" />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
                <li>{roles[2]}</li>
            </ul>
            </div>
        );
};
