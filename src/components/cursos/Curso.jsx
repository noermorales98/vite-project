const Curso = ({img, title, subtitle}) => {
    return (
        <div>
            <img src={img} alt={title} />
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
}
export default Curso;