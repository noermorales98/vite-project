import Curso from './Curso'
export default function GridCursos() {
    return (
        <div className="cursos-container">
            <Curso
                title="Curso de React"
                subtitle="Curso de React desde cero"
                img="https://app.ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Foriginal%2F9521c07e-3eb1-4b9a-b1d1-a310d843ece2.png&w=1920&q=75"
            />
            <Curso
                title="Curso de React Native"
                subtitle="Curso de React Native desde cero"
                img="https://app.ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Foriginal%2F9521c07e-3eb1-4b9a-b1d1-a310d843ece2.png&w=1920&q=75"
            />
        </div>
    )
}