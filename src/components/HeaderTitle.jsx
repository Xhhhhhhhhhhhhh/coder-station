


const divStyle = {
    display: 'flex',
    alignItems: 'center',
    columnGap: '100px',
    color: 'rgb(102, 102, 102)',
    fontWeight: 200,
    fontSize: '26px'
}



function HeaderTitle(props) {
    const { title } = props
    return (
        <div style={divStyle}>
            { title }
        </div>
    );
}

export default HeaderTitle;
