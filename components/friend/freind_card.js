export default function Friend(props){
    console.log(props,"FRIEND CARD");
    // {
    //     "id": 1,
    //     "blog_id": {
    //         "id": 1,
    //         "title": "Wanderlust Chronicles"
    //     },
    //     "user_id": {
    //         "username": "Ayman",
    //         "profile_pic": "https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/media/profile_pics/TNGRRLUMA-U04PQLUTEN7-bd5eab115e80-24.jpg",
    //         "id": 1,
    //         "first_name": "Ayman",
    //         "last_name": "malkawi",
    //         "email": "ayman@admin.com"
    //     }
    // },
    return(
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={`http://res.cloudinary.com/dhaem8m4p/${props.data.user_id.profile_pic}`} alt="Neil image" />
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