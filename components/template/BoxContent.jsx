import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function BoxContent(){
    return (
        <Box
          sx={{
            marginTop: '30px',
          }}
        >
          <Box sx={{width: '100%', textAlign: 'center'}}>
            <Typography
              component={'h1'}
              sx={{
                fontWeight: '600',
                fontSize: '48px',
                lineHeight: '72px',
                color: '#0F0C33',
              }}
            >
              Fitur Terbaik Dari Fascia Gun Mini Pro
            </Typography>
            <Typography
              sx={{
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '24px',
                color: 'rgba(15, 12, 51, 0.5)',
              }}
            >
              Bermusik sambil merawat tubuh yang terlalu lelah setelah
              beraktifitas seharian.
            </Typography>
            <Box sx={{flexGrow: 1, marginTop: '30px'}}>
              <Grid container>
                <Grid item sm={12} md={6}>
                  <div>
                    <Carousel
                      position={'bottom'}
                      value={productSlideValue}
                      onChange={onProductSlideChange}
                      slides={productDetailSlides}
                    />
                    <Dots
                      position={'bottom'}
                      value={productSlideValue}
                      onChange={onProductSlideChange}
                      thumbnails={[
                        <img
                          key={1}
                          style={smallSlideImage}
                          src={'/assets/images/homepage/detail-small-4.jpg'}
                        />,
                        <img
                          key={1}
                          style={smallSlideImage}
                          src={'/assets/images/homepage/detail-small-5.jpg'}
                        />,
                        <img
                          key={1}
                          style={smallSlideImage}
                          src={'/assets/images/homepage/detail-small-1.jpg'}
                        />,
                        <img
                          key={1}
                          style={smallSlideImage}
                          src={'/assets/images/homepage/detail-small-2.jpg'}
                        />,
                        <img
                          key={1}
                          style={smallSlideImage}
                          src={'/assets/images/homepage/detail-small-3.jpg'}
                        />,
                      ]}
                    />
                  </div>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Box
                    sx={{
                      textAlign: 'left',
                      fontWeight: '500',
                      fontSize: '16px',
                      lineHeight: '24px',
                      paddingLeft: '25px',
                    }}
                  >
                    <Typography
                      component={'h2'}
                      sx={{
                        fontWeight: '600',
                        fontSize: '28px',
                        lineHeight: '42px',
                        color: '#0F0C33',
                      }}
                    >
                      Fascia Gun Mini Pro
                    </Typography>
                    <Rating name='quality' value={5} readOnly />
                    <Typography
                      sx={{
                        color: 'rgba(15, 12, 51, 0.5)',
                      }}
                    >
                      Membantu meredakan nyeri otot dan kekakuan dengan 4
                      attachment massage head yang dapat diganti. Meningkatkan
                      sirkulasi darah, meningkatkan jangkauan gerak dan membantu
                      mempercepat pemanasan dan pemulihan
                    </Typography>
                    <table style={{width: '100%'}}>
                      <tbody>
                        <tr>
                          <td style={tdLabelProductDetailStyle}>Price:</td>
                          <td style={tdValueProductDetailStyle}>
                            Rp. 500K{' '}
                            <span
                              style={{
                                opacity: '0.5',
                                textDecoration: 'line-through',
                              }}
                            >
                              Rp. 999K
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td style={tdLabelProductDetailStyle}>Color:</td>
                          <td style={tdValueProductDetailStyle}>
                            <img
                              src={'/assets/images/homepage/small-color-1.png'}
                              style={{width: '26px'}}
                            />
                            <img
                              src={'/assets/images/homepage/small-color-2.png'}
                              style={{width: '26px', marginLeft: '8px'}}
                            />
                            <img
                              src={'/assets/images/homepage/small-color-3.png'}
                              style={{width: '26px', marginLeft: '8px'}}
                            />
                            <img
                              src={'/assets/images/homepage/small-color-4.png'}
                              style={{width: '26px', marginLeft: '8px'}}
                            />
                            <img
                              src={'/assets/images/homepage/small-color-6.png'}
                              style={{width: '26px', marginLeft: '8px'}}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={tdLabelProductDetailStyle}>Material:</td>
                          <td style={tdValueProductDetailStyle}>
                            <ToggleButtonGroup
                              color='primary'
                              value={materialSelect}
                              exclusive
                              onChange={handleChangeMaterialSelect}
                              variant={'text'}
                            >
                              <ToggleButton value='basic'>BASIC</ToggleButton>
                              <ToggleButton value='special'>
                                SPECIAL EDITION
                              </ToggleButton>
                            </ToggleButtonGroup>
                          </td>
                        </tr>
                        <tr>
                          <td style={tdLabelProductDetailStyle}>
                            Availability:
                          </td>
                          <td style={tdValueProductDetailStyle}>
                            <Typography sx={{color: '#5DB97C'}}>
                              In stock!
                            </Typography>
                          </td>
                        </tr>
                        <tr>
                          <td style={tdLabelProductDetailStyle}>Quantity:</td>
                          <td style={tdValueProductDetailStyle}>
                            <TextField
                              id='outlined-number'
                              type='number'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              sx={{width: '20%'}}
                              defaultValue={1}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <Link
                              href={
                                'https://www.tokopedia.com/mitimes/mitimes-fascia-massage-gun-mg1-orange-alat-pijat-orange'
                              }
                            >
                              <Button
                                variant='contained'
                                sx={{marginTop: '30px'}}
                              >
                                + Beli Sekarang
                              </Button>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
    );
}