import '../sections/Contact.css'; // Reusing styles

export const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </footer>
    );
};
