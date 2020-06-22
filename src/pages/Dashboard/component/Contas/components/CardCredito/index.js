import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles';

const CardCredito = () => {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        $
                    </Avatar>
                }
                title="Credito"
                subheader="R$ 3.000"
            />
            <CardActions disableSpacing>
                <Typography>
                    Lançamentos
                </Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        25/06/2020 - Cafe - R$ 2,50
                    </Typography>
                    <Typography paragraph>
                        25/06/2020 - Cafe - R$ 2,50
                    </Typography>
                    <Typography paragraph>
                        25/06/2020 - Cafe - R$ 2,50
                    </Typography>
                    <Typography paragraph>
                        25/06/2020 - Cafe - R$ 2,50
                    </Typography>
                    <Typography paragraph>
                        25/06/2020 - Cafe - R$ 2,50
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default CardCredito;