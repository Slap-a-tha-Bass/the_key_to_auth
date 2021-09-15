import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ContentProps } from '../../../types';
import { apiService } from '../utils/api-service';

const Content = (props: ContentProps) => {

    const history = useHistory();

    const [content, setContent] = useState<{ message: string }>(null);

    useEffect(() => {

        apiService('/api/users')
            .then(data => setContent(data))
            .catch(() => history.push('/login'))
    }, []);

    return (
        <div>
            <h1 className="text-center display-1">{content?.message}</h1>
        </div>
    )
}

export default Content;
