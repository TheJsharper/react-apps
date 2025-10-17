export interface GifsHeaderProps {
    title: string;
    description: string;
}
const GifsHeader = ({ title, description }: GifsHeaderProps) => {
    return (
        <div className="content-center">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default GifsHeader;