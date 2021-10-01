import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'


import styles from './styles.module.scss'

export function SingInButton() {
    const [session] = useSession();

    return session ? (
        <button className={styles.SingInButton} type="button" onClick={() => signOut()}>
            <FaGithub color="#04d361" />
            {session.user.name}
            < FiX className={styles.CloseIcon} color="#737380" />
        </button>
    ) : (
        <button className={styles.SingInButton} type="button" onClick={() => signIn('github')}>
            <FaGithub color="#eba417" />
            Sing in with Github
        </button>
    );
}