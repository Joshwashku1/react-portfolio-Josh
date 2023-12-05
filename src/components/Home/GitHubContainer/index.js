import './index.scss';

const GitHubContainer = () => {
    return (
        <>
        <div className='github-container'>
            <h3 className='container-name'>Github Projects & Repos</h3>
            <article className='container-card'>
                <p>Final project for UofM Coding Bootcamp</p>
                <a href='https://github.com/JuicinessJ/smokey-nagata'>Repo</a>
            </article>
            <article className='container-card'>
                <p>Gym App prototype</p>
                <a href='https://github.com/chrisbchickin/gym-homie'>Repo</a>
            </article>
            <article className='container-card'>
                <p>First project for UofM Coding Bootcamp</p>
                <a href='https://github.com/Benmarz10/Search-Hero'>Repo</a>
            </article>
        </div>
        </>
    )
}

export default GitHubContainer