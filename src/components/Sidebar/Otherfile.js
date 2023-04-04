function OtherFile(props) {
    const { handleToggle } = props;

    const handleClick = () => {
        handleToggle();
    };

    return handleClick
}

export default OtherFile;