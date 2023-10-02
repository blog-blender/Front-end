export default function Friend(props){
    // console.log(props,"FRIEND CARD");
    return(
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL}${props.data.user_id.profile_pic}`} alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                            {`${props.data.user_id.first_name} ${props.data.user_id.last_name}`}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {props.data.user_id.email}
                    </p>
                </div>

            </div>
        </li>
    )
}