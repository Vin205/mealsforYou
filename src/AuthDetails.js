import { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                // Fetch user data from Firestore
                getUserData(user.uid);
            } else {
                setAuthUser(null);
                setUserData(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const getUserData = async (uid) => {
        try {
            const userQuery = query(collection(db, 'users'), where('uid', '==', uid));
            const querySnapshot = await getDocs(userQuery);
            querySnapshot.forEach((doc) => {
                setUserData(doc.data());
            });
        } catch (error) {
            console.error('Error fetching user data:', error.message);
        }
    };

    const usersignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out successful');
            })
            .catch((error) => console.error('Error signing out:', error.message));
    };

    return (
        <div>
            {authUser ? (
                <div>
                    <p>{'Signed In as ' + authUser.email}</p>
                    {userData && <p>{'First Name: ' + userData.firstName}</p>}
                    {userData && <p>{'Last Name: ' + userData.lastName}</p>}
                    <button onClick={usersignOut}>Sign Out</button>
                </div>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    );
};

export default AuthDetails;

