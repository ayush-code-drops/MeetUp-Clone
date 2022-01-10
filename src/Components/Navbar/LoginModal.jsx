import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',

  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  
  overflowY:'auto',
  height:'600px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius:'45px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{color:'black'}} onClick={handleOpen}>Log in</Button>
      <Modal
      sx={{marginTop:'100px'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi mollitia, ad ut, dolorum placeat incidunt eligendi repudiandae voluptates tenetur aspernatur, ullam rem! Ea nemo mollitia aspernatur non dolores, laboriosam, voluptatibus distinctio exercitationem rerum error fuga aperiam reprehenderit molestiae iste, placeat earum cumque quo possimus ducimus! Explicabo voluptas culpa sed veritatis commodi consequatur libero voluptatum fuga nisi vero, deserunt doloremque in, quam nostrum, dolores iusto temporibus. Explicabo reiciendis maxime, iure quae quisquam inventore unde blanditiis id neque aspernatur accusantium sed cupiditate corporis. Deserunt voluptate cupiditate recusandae a iste repellat expedita? Sint, corrupti placeat. Sed incidunt fugiat maiores rem mollitia dignissimos suscipit veritatis optio illum aliquam dolore aperiam, commodi distinctio hic ullam corporis voluptates officiis provident modi odit reiciendis pariatur accusantium in? Velit sequi a laudantium perferendis tempore aliquam beatae eaque architecto? Autem, laborum est vitae iste maiores beatae aut possimus doloribus pariatur. Eius dolore enim iure voluptates, laudantium exercitationem ipsam non aut numquam ad. Delectus similique deserunt recusandae ipsum consequuntur. Repudiandae, adipisci consectetur! Recusandae ut eum dolores tempore officia ullam ipsam placeat nulla repudiandae dignissimos delectus cum excepturi, totam fuga ipsum. Laudantium earum assumenda ducimus ab minus. Deserunt quam ipsam accusantium placeat iure excepturi? Eius perferendis veniam iste vel quasi maxime deserunt ad commodi vero dignissimos ullam rem recusandae molestias expedita sequi pariatur quisquam dolore debitis, atque cum mollitia quas itaque labore. Molestiae asperiores facilis beatae optio reprehenderit amet quas! Exercitationem a velit laboriosam voluptate? Natus maiores hic enim veniam eius saepe minus unde nulla nihil tenetur veritatis molestias, voluptas id, optio corporis alias minima porro ullam perferendis, possimus explicabo architecto repellat. Aspernatur, numquam expedita in nemo laborum tenetur, dolore et similique, ullam perspiciatis ex quos eaque debitis esse repellat laudantium quasi pariatur illo enim accusamus deserunt. Maiores reiciendis aperiam explicabo officia molestias laboriosam dignissimos voluptatibus temporibus minima ducimus, voluptas sint vitae dolores qui. Possimus, illo eum adipisci dolor, nobis suscipit necessitatibus ea dolore ducimus ad est, cum doloremque atque distinctio. Quae a quo culpa ratione deleniti est, dolorum repudiandae commodi quia sed illo non, similique consectetur cupiditate dicta exercitationem esse magni et. Magni repudiandae modi voluptatibus assumenda quaerat quisquam animi ea culpa eos facilis incidunt, quis impedit porro debitis eum maxime architecto inventore dolorem, facere voluptatem odit doloremque. Illo odit ab doloremque neque? Dicta consequatur nesciunt qui consequuntur optio quo possimus accusamus. Saepe eligendi ducimus voluptates quis itaque perferendis minima fugit est hic inventore molestias tempora, ipsum temporibus voluptatum eos.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}