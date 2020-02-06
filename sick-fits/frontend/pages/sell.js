import Link from 'next/link';

const Sell = props => {
    return (
        <div>
            <p>This is the sell page!</p>
            <Link href="/index">
                <a>Visit the home page</a>
            </Link>
        </div>
    )
}

export default Sell;