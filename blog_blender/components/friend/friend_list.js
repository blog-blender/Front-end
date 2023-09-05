import Friend from "./freind_card"
export default function FriendList(props){
    return(
        <div className="m-7 w-1/4 p-4 bg-[#ffff] rounded-lg shadow sm:p-8  dark:border-gray-700 ">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Followers</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
    </div>
    <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {props.data.map((freind, index) => (
                <Friend data={freind}/>
            ))}
        </ul>
    </div>
</div>

    )
}