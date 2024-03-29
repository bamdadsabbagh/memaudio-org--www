import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useStore} from '../../../store/use-store';

/**
 * Entry hook for 404 page
 */
export function use404Page(): void {
  const router = useRouter();
  const setLeave = useStore((state) => state.board.setLeave);
  const waitFor = useStore((state) => state.animations.waitFor);

  useEffect(() => {
    const d1 = 2000;
    const t1 = setTimeout(() => {
      setLeave();
    }, d1);

    const d2 = d1 + waitFor.board.leave;
    const t2 = setTimeout(async () => {
      await router.push('/');
    }, d2);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [router, setLeave, waitFor.board.leave]);
}
