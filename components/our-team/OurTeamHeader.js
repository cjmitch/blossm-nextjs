

const OurTeamHeader = props => (
    <header className="masthead blossm_secondary_color text-center text-white rounded-bottom">
        <div className="container">
            <div className="text-center">
                <h2 className="page-section-heading text-white d-inline-block mb-0">OUR BLOSSM'ING TEAM</h2>
            </div>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-seedling"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="{{site.nick_headshot}}" alt="..."/>
                        <h4>site.nick_full_name</h4>
                        <p className="text-muted"/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="{{site.brian_headshot}}" alt="..."/>
                        <h4>site.brian_full_name</h4>
                        <p className="text-muted"/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="{{site.calvin_headshot}}" alt="..."/>
                        <h4>site.calvin_full_name</h4>
                        <p className="text-muted"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg mx-auto text-center"><p className="large  text-small-size text-light">
                    site
                    .team_description
                </p></div>
            </div>
        </div>
    </header>
);

export default OurTeamHeader;