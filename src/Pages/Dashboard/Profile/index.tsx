import useAuth from "../../../hooks/useAuth"

export default function Profile () {
    const { auth } = useAuth();
    return (
        <div className="text-center">
            <h1>First name</h1>
            <p>
                {auth?.profile?.first_name}
            </p>
        </div>
    )
}
