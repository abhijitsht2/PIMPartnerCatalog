import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import './Partner_Catalog_1.css';
import $ from 'jquery';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  var firstclick=false;
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const TargetClose= () => {
    $('.appendbutton').remove();
    $('.appendbtn').remove();
    firstclick=false;
    $('.button-Close').css("margin-left","0");
  };
  
  $(document).ready(function() {
    var targetcat='';
    $('#homeappl').change(function() {
      
        if(this.checked) {
          targetcat=this.value;
          if(firstclick==true){
            $("#append").after("<button class='appendbutton'>"+targetcat+"<span class='close'>&times;</span></button>.");
            $('.button-Close').css("margin-left","290px");
           }
           else{
           $("#targetInputField").after("<button id='append' class='appendbtn'>"+targetcat+"<span class='close'>&times;</span></button>.");
           $('.button-Close').css("margin-left","290px");
           firstclick=true;
           }
        }
        else{
          firstclick=false;
        }     
    });
    $(document).on("click", "span.close" , function() {
      $(this).parent().remove();
    });
    $('#kitchenappl').change(function() {
      if(this.checked) {
        targetcat=this.value;
        if(firstclick==true){
          $("#append").after("<button class='appendbutton'>"+targetcat+"<span class='close'>&times;</span></button>.");
          $('.button-Close').css("margin-left","290px");
         }
         else{
          $("#targetInputField").after("<button id='append' class='appendbtn'>"+targetcat+"<span class='close'>&times;</span></button>.");
         firstclick=true;
         }
      }   
          
  });
  $('#entertainment').change(function() {
    if(this.checked) {
      targetcat=this.value;
      if(firstclick==true){
        $("#append").after("<button class='appendbutton'>"+targetcat+"<span class='close'>&times;</span></button>.");
        $('.button-Close').css("margin-left","290px");
       }
       else{
        $("#targetInputField").after("<button id='append' class='appendbtn'>"+targetcat+"<span class='close'>&times;</span></button>.");
       firstclick=true;
       }
    }
          
});
$('#mobilephones').change(function() {
  if(this.checked) {
    targetcat=this.value;
    if(firstclick==true){
      $("#append").after("<button class='appendbutton'>"+targetcat+"<span class='close'>&times;</span></button>.");
      $('.button-Close').css("margin-left","290px");
     }
     else{
      $("#targetInputField").after("<button id='append' class='appendbtn'>"+targetcat+"<span class='close'>&times;</span></button>.");
     firstclick=true;
     }
  }
         
});
$('#laptops').change(function() {
  if(this.checked) {
    targetcat=this.value;
    if(firstclick==true){
      $("#append").after("<button class='appendbutton'>"+targetcat+"<span class='close'>&times;</span></button>.");
      $('.button-Close').css("margin-left","290px");
     }
     else{
      $("#targetInputField").after("<button id='append' class='appendbtn'>"+targetcat+"<span class='close'>&times;</span></button>.");
     firstclick=true;
     }
  }       
});
$('#watches').change(function() {
  if(this.checked) {
    targetcat=this.value;
    if(firstclick==true){
      $("#append").after("<button class='appendbutton'>"+targetcat+"<span class='close'>&times;</span></button>.");
      $('.button-Close').css("margin-left","290px");
     }
     else{
      $("#targetInputField").after("<button id='append' class='appendbtn'>"+targetcat+"<span class='close'>&times;</span></button>.");
     firstclick=true;
     }
  }       
});
});

  return (
    <div >
      <button className="mapCatalog" onClick={handleClickOpen}>
      Map to Catalogue
      </button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <p className="dialogTitle">Select Target Category</p>
          
        </DialogTitle>
        <DialogContent dividers>
          <div className="targetContentBackground">
          <div>
            <p className="Launchpap-Copy-3">Electronics</p>
          </div>
        <input className="Input-Field-Target" type="text" placeholder="Search" name="search"/>
          <button className="button-9-9-Target" type="submit"><i className="fa fa-search"></i></button>
          <div>
          <ul>
            <li className="targetFirstBackground"><input type="checkbox" id="homeappl" value="homeappliances" name="targetcategory" className="targetCheckbox_BorderRegular"/><p className="targetColumn-Title">Home Appliances</p></li>
            <li className="targetSecondBackground"><input type="checkbox" id="kitchenappl" value="kitchenappliances" name="targetcategory" className="targetCheckbox_BorderRegular"/><p className="targetColumn-Title">Kitchen Appliances</p></li>
            <li className="targetFirstBackground"><input type="checkbox" id="entertainment" value="entertainment" name="targetcategory" className="targetCheckbox_BorderRegular"/><p className="targetColumn-Title">Entertainment</p></li>
            <li className="targetSecondBackground"><input type="checkbox" id="mobilephones" value="mobilephones" name="targetcategory" className="targetCheckbox_BorderRegular"/><p className="targetColumn-Title">Mobile Phones</p></li>
            <li className="targetFirstBackground"><input type="checkbox" id="laptops" value="laptops" name="targetcategory" className="targetCheckbox_BorderRegular"/><p className="targetColumn-Title">Laptops</p></li>
            <li className="targetSecondBackground"><input type="checkbox" id="watches" value="watches" name="targetcategory" className="targetCheckbox_BorderRegular"/><p className="targetColumn-Title">Watches</p></li>
          </ul>
          </div>
          <div className="targetselRectangle">
          <i className='fas fa-chevron-down targetdown'></i>
          <p className="targetSelected-Items-1">Selected Categories (0)</p>
          <input type="text" id="targetInputField" className="targetselInput-Field"/>
          <button id="targetCatClose" className="button-Close" onClick={TargetClose}><i class="far fa-times-circle"></i></button>
          </div>
          </div>
        </DialogContent>
        <DialogActions dividers>
          <button className="targetConfirmButton" autoFocus>
            Confirm
          </button>
          <button className="targetCancelButton" onClick={handleClose}>
            Cancel
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
