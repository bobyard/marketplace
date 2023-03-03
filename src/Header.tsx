import {ConnectButton, useWallet} from "@suiet/wallet-kit";

function Header() {

    const wallet = useWallet();

    return <div className="navbar bg-base-100">
        <div className="dropdown dropdown-end">
            <label  className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="/WechatIMG240.png"  alt="logo"/>
                </div>
            </label>
        </div>
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">BobYard</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><a href="/">Home</a></li>
                <li><a>Marketplace</a></li>
                <li><a>AboutUs</a></li>
                {wallet.connected&&<li><a href="/profile">Profile</a></li>}
                <li>
                    <ConnectButton className="z-10"/>
                </li>
            </ul>
        </div>
    </div>;
}

export default Header;