const Link = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginleft: '4px'
        }}
    >
        {children}
    </button>
)

export default Link;